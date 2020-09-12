import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/paragraph"
import Register from "../components/register"
import Technologies from "../components/technologies"

const IndexPage = () => (
  <Layout>
    <SEO title="Beautiful full-featured themes for Gatsby.js" />

    <div className="md:grid md:grid-cols-12 md:gap-8">
      <div className="md:col-span-7 xl:col-span-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
          Beautiful, full-featured themes to kick-start your next{" "}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-indigo-600"
          >
            Gatsby.js
          </a>{" "}
          project.
        </h1>

        <Paragraph className="lg:text-xl">
          A collection of production ready Gatsby themes for common use-cases.
        </Paragraph>

        <Register className="mt-8" />
      </div>

      <div className="mt-8 md:mt-0 md:col-span-5 xl:col-start-8">
        {/* Image placeholder */}
        <div className="bg-teal-500 rounded-lg h-64"></div>
      </div>
    </div>

    <Technologies />
  </Layout>
)

export default IndexPage
