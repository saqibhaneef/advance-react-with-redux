import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
    test:{
        environment:"jsdom",
        reporters: ['html']
    },
    plugins:[react()]
})