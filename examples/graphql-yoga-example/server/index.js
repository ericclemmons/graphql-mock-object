import express from "express"

import { app } from "./app"

if (module.hot) {
  module.hot.accept("./app", function() {
    console.log("🔁  HMR Reloading `./app`...")
  })

  console.info("✅  Server-side HMR Enabled!")
} else {
  console.info("❌  Server-side HMR Not Supported.")
}

export default app
  .start({
    playground: process.env.NODE_ENV === "production" ? false : "/",
    port: process.env.PORT || 3000,
    tracing: process.env.NODE_ENV !== "production",
  })
  .then(() => {
    console.log("Listening at http://localhost:3000")
  })
