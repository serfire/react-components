'use strict'


StandardListItem = require './StandardListItem'
React        = require 'react'

StandardListItemExamples = ->
  <div className="StandardListItemExamples flex column middle center light-bg">
    <h1>Default</h1>

    <StandardListItem imgSrc='../components/Avatar/place-holder.svg' labelText='This is a test'  />

    <h1>Icon on the Left</h1>

    <StandardListItem imgSrc='../components/Avatar/place-holder.svg' labelText='This is a test' placeIcon='left'  />

    <h1>Icon on the Right</h1>

    <StandardListItem imgSrc='../components/Avatar/place-holder.svg' labelText='This is a test' placeIcon='right'  />

    <h1>Icon Hidden</h1>
    <StandardListItem labelText='This is a test' hideIcon=true  />

    <h1>Label Hidden</h1>
    <StandardListItem imgSrc='../components/Avatar/place-holder.svg' hideLabel=true  />

  </div>

module.exports = StandardListItemExamples