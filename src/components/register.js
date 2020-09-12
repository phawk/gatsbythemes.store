import React, { useState } from "react"
import { Link } from "gatsby"

import * as routes from "../utils/routes"

const Register = ({ className }) => {
  const [state, setState] = useState("initial")
  const [error, setError] = useState(null)
  const [email, setEmail] = useState("")

  return (
    <form
      className={`${className}`}
      onSubmit={async e => {
        e.preventDefault()

        setState("submitting")

        const res = await fetch("/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        })

        try {
          const json = await res.json()

          if (res.status === 201) {
            console.log("Great success...", json)
            setState("success")
          } else {
            console.log("Bad...", json)
            setState("error")
            setError(json.error)
          }
        } catch (err) {
          console.log("Failed to hit API", err.message)
          setState("error")
          setError(
            "Subscribe service not available. Shoot me an email at pete@phawk.co.uk and I'll add you to the list."
          )
        }
      }}
    >
      <span className="text-lg text-gray-900">Subscribe for updates</span>

      <div className="mt-3 sm:flex">
        <input
          aria-label="Email address"
          type="email"
          placeholder="jon.appleseed@apple.com"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="appearance-none w-full p-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
        />
        <button
          type="submit"
          disabled={state === "submitting"}
          className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-3 flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        >
          {state === "submitting" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {state === "error" && (
        <div className="mt-4 bg-red-100 rounded-md p-3 text-red-700 text-sm">
          {error}
        </div>
      )}
      {state === "success" && (
        <div className="mt-4 bg-green-100 rounded-md p-3 text-green-700 text-sm">
          Thanks for subscribing, you have been added to the list 🤘
        </div>
      )}

      <span className="block mt-2 text-gray-500 text-sm">
        We care about the protection of your data. Read our{" "}
        <Link to={routes.PRIVACY} className="text-gray-800 underline">
          Privacy Policy
        </Link>
        .
      </span>
    </form>
  )
}

export default Register
