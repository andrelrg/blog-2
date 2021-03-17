import React from 'react'
import App from 'next/app'
import Layout from '../src/layout/Layout'

class Blog extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
    )
  }
}

export default Blog