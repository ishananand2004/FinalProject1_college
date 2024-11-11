
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";

export function TermsAndConditions() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 lg:w-1/5 px-4 py-6 md:py-8 sticky top-0 md:mt-32 bg-white md:bg-transparent md:border-transparent md:ml-20 border-gray-200 shadow-md md:shadow-none">
        <nav className="space-y-4 text-gray-700">
          <a href="#terms" className="block hover:text-blue-600">1. Terms & Conditions</a>
          <a href="#privacy" className="block hover:text-blue-600">2. Privacy Policy</a>
          <a href="#userpolicy" className="block hover:text-blue-600">3. User Policy</a>
          <a href="#copyright" className="block hover:text-blue-600">4. Copyrights</a>
          <a href="#cookies" className="block hover:text-blue-600">5. Cookies</a>
          <a href="#accounts" className="block hover:text-blue-600">6. Account & Billing</a>
        </nav>
      </aside>

      <div>
      {/* Main Content */}
      <div className="flex-1 mt-28 px-4 py-6 md:py-8" id="terms">
              <Card  className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">1. Terms and Conditions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                  <p>
                    Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  </p>
                  <p>
                    Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  </p>
                  <p>
                    Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem.
                  </p>

                  {/* Bullet List */}
                  <ul className="space-y-2 mt-4">
                    {[
                      "Aenean eu leo quam ornare curabitur blandit tempus.",
                      "Nullam quis risus eget urna mollis ornare donec elit.",
                      "Etiam porta sem malesuada magna mollis euismod.",
                      "Fermentum massa vivamus faucibus amet euismod.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Icon provider="lucide" name="CircleCheckBig" className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="text-gray-500">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex-1 mt-16 px-4 py-6 md:py-8" id="privacy">
              <Card className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">2. Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                  <p>Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                  <p>Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  {/* Bullet List */}
                  <ul className="space-y-2 mt-4">
                    {[
                      "Aenean eu leo quam ornare curabitur blandit tempus.",
                      "Nullam quis risus eget urna mollis ornare donec elit.",
                      "Etiam porta sem malesuada magna mollis euismod.",
                      "Fermentum massa vivamus faucibus amet euismod.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Icon provider="lucide" name="CircleCheckBig" className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="text-gray-500">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1 mt-16 px-4 py-6 md:py-8" id="userpolicy">
              <Card className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">3. User Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                  <p>Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                  <p>Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  <p>
                    Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1 mt-16 px-4 py-6 md:py-8" id="copyright">
              <Card className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">4. Copyrights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                  <p>Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                  <p>Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  {/* Bullet List */}
                  <ul className="space-y-2 mt-4">
                    {[
                      "Aenean eu leo quam ornare curabitur blandit tempus.",
                      "Nullam quis risus eget urna mollis ornare donec elit.",
                      "Etiam porta sem malesuada magna mollis euismod.",
                      "Fermentum massa vivamus faucibus amet euismod.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Icon provider="lucide" name="CircleCheckBig" className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="text-gray-500">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1 mt-16 px-4 py-6 md:py-8" id="cookies">
              <Card className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">5. Cookies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                  <p>Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                  <p>Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  <p>
                    Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1 mt-16 px-4 py-6 md:py-8" id="accounts">
              <Card className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl">6. Accounts & Billing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-500">
                  <p>Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                  <p>Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  <p>
                    Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem.
                  </p>
                </CardContent>
              </Card>
            </div>
      </div>

      
    </div>
    
  );
}
