import "../styles/app.css"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="mx-auto max-w-xl p-10 lg:p-16">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-extrabold text-gray-900 mr-3">
          {data.site.siteMetadata.title}
        </Link>
        <span class="inline-flex items-center px-2 rounded-full text-sm font-medium leading-5 bg-green-200 text-green-800">
          Coming soon
        </span>
      </div>
      <main className="py-6 md:py-10">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
