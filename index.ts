import express, { Express, Request, Response } from "express";
import { VitalClient, VitalEnvironment } from "@tryvital/vital-node";
import { config } from "dotenv";

config();

const app: Express = express();
const port = process.env.PORT || 3000;

const vitalEnvironment =
  process.env.VITAL_API_ENVIRONMENT === "sandbox"
    ? process.env.VITAL_API_REGION === "eu"
      ? VitalEnvironment.SandboxEu
      : VitalEnvironment.Sandbox
    : process.env.VITAL_API_REGION === "eu"
    ? VitalEnvironment.ProductionEu
    : VitalEnvironment.Production;

const vital = new VitalClient({
  apiKey: process.env.VITAL_API_KEY || "",
  environment: vitalEnvironment,
});

app.get("/api/markers", async (req: Request, res: Response) => {
  try {
    const markers = await vital.labTests.getMarkers();
    res.status(200).json(markers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch markers from vital" });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
