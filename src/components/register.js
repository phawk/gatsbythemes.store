import React, { useState } from "react"

const Register = ({ className }) => {
  const [state, setState] = useState("initial")
  const [error, setError] = useState(null)

  return (
    <form
      className={`bg-gray-100 rounded-md p-4 md:px-6 md:py-5 ${className}`}
      onSubmit={async e => {
        e.preventDefault()

        setState("submitting")

        const res = await fetch("/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        })

        try {
          const json = await res.json()

          if (res.status === 200) {
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
      <span className="text-lg font-medium text-gray-900">
        Subscribe for updates
      </span>

      <div className="mt-3 sm:flex">
        <input
          aria-label="Email address"
          type="email"
          placeholder="jon.appleseed@apple.com"
          required
          className="appearance-none w-full p-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
        />
        <button
          type="submit"
          disabled={state === "submitting"}
          className="w-full sm:w-auto sm:ml-3 flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        >
          {state === "submitting" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {state === "error" && (
        <div className="mt-4 bg-red-100 rounded-md p-3 text-red-700 text-sm">
          {error}
        </div>
      )}
    </form>
  )
}

export default Register
