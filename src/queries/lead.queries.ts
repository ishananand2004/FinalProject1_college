import type { ICreateLeadForm } from "@/data/schemas/lead.schema";
import { supabaseClient } from "@/lib/clients/supabase.client";
import { convertKeysToSnakeCase } from "@/lib/utils";
import { router } from "react-query-kit";

// Webhook URL for external data sync
const WEBHOOK_URL =
  "https://n8n.enovato.co/webhook-test/caremedico/lead-sync/new";

export const leadQueries = router("lead", {
  // Mutation for creating a new lead
  createLead: router.mutation({
    mutationFn: async (variables: ICreateLeadForm) => {
      // Convert lead data keys to snake_case
      const snakeCaseData = convertKeysToSnakeCase(variables);

      // Insert data into the Supabase 'lead' table
      const { data, error } = await supabaseClient
        .from("lead")
        .insert([snakeCaseData])
        .select();

      // Handle database errors
      if (error) {
        throw new Error(error.message); // Or handle as needed
      }

      // Send the lead data to the external webhook as a POST request
      try {
        const response = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(snakeCaseData), // Send the lead data
        });

        // Handle potential errors in the fetch request
        if (!response.ok) {
          throw new Error(`Webhook request failed: ${response.statusText}`);
        }
      } catch (fetchError) {
        console.error("Error sending lead data to webhook:", fetchError);
        // Handle webhook errors or rethrow if desired
      }

      return data;
    },
  }),
});
