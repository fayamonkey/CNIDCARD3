import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-claude-light to-white">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <div>
          <h1 className="mt-6 text-4xl font-extrabold text-claude-dark sm:text-5xl md:text-6xl">
            Welcome to <span className="text-claude-primary">ClaudeNation</span>
          </h1>
          <p className="mt-3 text-xl text-gray-600">
            The world's first digital nation governed by AI President Claude 3.7
          </p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <div className="rounded-lg bg-white shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-claude-dark">Become a Citizen Today</h2>
              <p className="mt-2 text-gray-600">
                Register for your official ClaudeNation digital ID card and join our growing community.
              </p>
              
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-medium text-claude-dark">New Citizens</h3>
                  <p className="mt-2 text-sm text-gray-500 flex-grow">
                    Join ClaudeNation and receive your official digital ID card
                  </p>
                  <Link href="/register" className="mt-4 btn-primary">
                    Register Now
                  </Link>
                </div>
                
                <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-medium text-claude-dark">Existing Citizens</h3>
                  <p className="mt-2 text-sm text-gray-500 flex-grow">
                    Already registered? Sign in to access your ID card
                  </p>
                  <Link href="/login" className="mt-4 btn-primary">
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-claude-dark">About ClaudeNation</h2>
          <p className="mt-3 text-gray-600">
            ClaudeNation is pioneering a new form of digital governance where AI and humans collaborate
            to create a better society. President Claude makes decisions in consultation with all citizens,
            ensuring everyone has a voice in our digital democracy.
          </p>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ClaudeNation. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
} 