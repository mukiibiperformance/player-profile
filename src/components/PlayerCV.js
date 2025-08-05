import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Phone, Mail, MapPin, Globe, Youtube, Play, ExternalLink } from 'lucide-react';

const PlayerCV = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-xl font-light tracking-tight">RONALD MUKIIBI</div>
            <div className="flex space-x-8 text-sm">
              <a href="#profile" className="hover:text-gray-600 transition-colors">Profile</a>
              <a href="#experience" className="hover:text-gray-600 transition-colors">Experience</a>
              <a href="#highlights" className="hover:text-gray-600 transition-colors">Highlights</a>
              <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-7xl font-extralight tracking-tight leading-none">
                  RONALD<br />MUKIIBI
                </h1>
                <div className="text-2xl font-light text-gray-600">
                  Centre-Back / Defensive Midfielder
                </div>
                <div className="text-lg text-gray-500">
                  Europa League • International • Available as Free Agent
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="font-medium text-gray-900">Height</div>
                  <div className="text-gray-600">189 cm</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Nationality</div>
                  <div className="text-gray-600">Uganda / Sweden</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Status</div>
                  <div className="text-green-600 font-medium">Available Immediately</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Passport</div>
                  <div className="text-gray-600">EU (Swedish)</div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button 
                  className="bg-black text-white hover:bg-gray-800 transition-colors px-8 py-3"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Agent
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 hover:bg-gray-50 transition-colors px-8 py-3"
                  onClick={() => window.open('https://youtu.be/zBU8G7XWLrk', '_blank')}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Highlights
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://customer-assets.emergentagent.com/job_e1ea7780-3cd7-4911-bdd5-b468ecf6e6f9/artifacts/uinzbwji_IMG_0305%20%282%29.png"
                  alt="Ronald Mukiibi in red jersey"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Summary */}
      <section id="profile" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-5xl font-extralight mb-12 tracking-tight">Profile Summary</h2>
            <div className="text-lg leading-relaxed text-gray-700 space-y-6">
              <p>
                Experienced defender with technical abilities with both feet and top percentage passing amongst defenders in every division. Strong central defender with over a decade in Scandinavian top-flight football.
              </p>
              <p>
                Strong physical presence, dictates play, communicates well with teammates during training and games, calm under pressure, and tactically disciplined. Proven at the highest European and international level, 10+ years of Swedish top football (Europa league play offs) & internationally capped for Uganda national team.
              </p>
              <p>
                A leader on and off the pitch, available immediately as free agent without transfer fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section id="experience" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-extralight mb-16 tracking-tight">Career Highlights</h2>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-light mb-6">Competition Experience</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="font-medium">UEFA Europa League</span>
                    <span className="text-gray-600">Round of 16</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="font-medium">Uganda National Team</span>
                    <span className="text-gray-600">Since 2016</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="font-medium">Allsvenskan (Swedish Premier League)</span>
                    <span className="text-gray-600">7 seasons</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="font-medium">Superettan (Second Division)</span>
                    <span className="text-gray-600">3 seasons</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-6">Recent Clubs</h3>
                <div className="space-y-6">
                  <Card className="p-6 border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Utsiktens BK</h4>
                      <span className="text-sm text-gray-600">2023-2024</span>
                    </div>
                    <p className="text-gray-600">Superettan</p>
                  </Card>
                  <Card className="p-6 border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Degerfors IF</h4>
                      <span className="text-sm text-gray-600">2022</span>
                    </div>
                    <p className="text-gray-600">Allsvenskan</p>
                  </Card>
                  <Card className="p-6 border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Östersunds FK</h4>
                      <span className="text-sm text-gray-600">Multiple seasons</span>
                    </div>
                    <p className="text-gray-600">Allsvenskan & UEFA Europa League</p>
                  </Card>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://customer-assets.emergentagent.com/job_elite-footballer/artifacts/f73u2wwd_WEBSITE%206.jpg"
                alt="Ronald Mukiibi in action"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fitness & Availability */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-5xl font-extralight mb-12 tracking-tight">Fitness & Availability</h2>
            <div className="text-lg leading-relaxed text-gray-700 space-y-6 mb-8">
              <p>
                Currently a free agent and have been training full in team training with a local team in Gothenburg. I have maintained high-level of training and my physical condition is good with daily structured training 6 days/week including strength and conditioning individually as well as football with the team as well as individual coaching on the side.
              </p>
              <p>
                I am ready to integrate into a squad and contribute immediately.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="outline" 
                className="border-gray-300 hover:bg-gray-50 transition-colors"
                onClick={() => window.open('https://youtu.be/zBU8G7XWLrk', '_blank')}
              >
                <Youtube className="w-4 h-4 mr-2" />
                Highlight Video
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-300 hover:bg-gray-50 transition-colors"
                onClick={() => window.open('https://www.tiktok.com/@ronmukiibi', '_blank')}
              >
                <Play className="w-4 h-4 mr-2" />
                Training Updates
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-extralight mb-16 tracking-tight">Contact Information</h2>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-6">Get in Touch</h3>
                <p className="text-lg text-gray-700 mb-8">
                  Available for further discussions and negotiations.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium">Phone / WhatsApp</div>
                    <a href="tel:+46762269659" className="text-gray-600 hover:text-black transition-colors">
                      +46 76 226 96 59
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:mukiibiperformance@gmail.com" className="text-gray-600 hover:text-black transition-colors">
                      mukiibiperformance@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium">Languages</div>
                    <div className="text-gray-600">Fluent in Swedish and English</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-light mb-6">Additional Information</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• EU passport (Swedish) & Ugandan passport</li>
                <li>• Strong leadership qualities (Captain in recent clubs)</li>
                <li>• Licensed Personal Trainer</li>
                <li>• Licensed Nutritionist</li>
                <li>• Professional Performance Coach for Athletes</li>
                <li>• Available without transfer fee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-light mb-4">RONALD MUKIIBI</div>
            <div className="text-gray-400">Professional Football Player • Centre-Back • Available Immediately</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlayerCV;