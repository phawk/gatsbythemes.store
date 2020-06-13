import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/paragraph"
import Register from "../components/register"

const IndexPage = () => (
  <Layout>
    <SEO title="Beautiful full-featured themes for Gatsby.js" />

    <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 leading-snug">
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

    <Paragraph>
      We’re developing a collection of production ready Gatsby themes for common
      use-cases.
    </Paragraph>

    <Paragraph>
      Depending on the use case, each theme will be integrated with popular
      headless CMS’s, payments providers and e-commerce systems.
    </Paragraph>

    <Paragraph>
      Register your interest below to be the first to know when we launch and
      get special launch day offers.
    </Paragraph>

    <Register className="mt-8" />
  </Layout>
)

export default IndexPage
