import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
// import * as S from "../styles/index.styles"
import Img from "gatsby-image"
//Components
import { LandingInfo } from "../components/Landing/LandingInfo/LandingInfo"
import { MainBlock } from "../components/Landing/LandingMainBlock/MainBlock"
import { LandingImages } from "../components/Landing/LandingImages/LandingImages"
import { LandingSteps } from "../components/Landing/LandingSteps/LandingSteps"

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => {
  const query = graphql`
    query MyQuery {
      allContentfulLanding {
        nodes {
          mainTitle {
            raw
          }
          images {
            id
            file {
              url
            }
          }
        }
      }
    }
  `
  const data = useStaticQuery(query)
  console.log(data.allContentfulLanding.nodes[0].images.file.url)
  return (
    <Layout>
      {/* <h1>{data.allContentfulLanding.nodes}</h1> */}
      <MainBlock />
      <LandingImages />
      <LandingInfo />
      <LandingSteps />
    </Layout>
  )
}

// export const Head = () => <Seo title="Home" />

export default IndexPage
