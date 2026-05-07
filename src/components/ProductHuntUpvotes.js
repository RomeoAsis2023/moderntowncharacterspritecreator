import React from 'react'

export default function ProductHuntUpvotes () {
  return (
    <>
      <div className="product-hunt-upvotes">
        <a
          href="https://www.modern.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/logo.png"
            alt="Modern AI"
            width="400" height="269" />
        </a>
      </div>
      <style jsx>{`
        .product-hunt-upvotes {
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }
      `}</style>
    </>
  )
}
