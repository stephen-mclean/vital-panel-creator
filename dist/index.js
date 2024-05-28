"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vital_node_1 = require("@tryvital/vital-node");
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const vitalEnvironment = process.env.VITAL_API_ENVIRONMENT === "sandbox"
    ? process.env.VITAL_API_REGION === "eu"
        ? vital_node_1.VitalEnvironment.SandboxEu
        : vital_node_1.VitalEnvironment.Sandbox
    : process.env.VITAL_API_REGION === "eu"
        ? vital_node_1.VitalEnvironment.ProductionEu
        : vital_node_1.VitalEnvironment.Production;
const vital = new vital_node_1.VitalClient({
    apiKey: process.env.VITAL_API_KEY || "",
    environment: vitalEnvironment,
});
app.use((0, cors_1.default)());
app.get("/api/markers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const markers = yield vital.labTests.getMarkers();
        res.status(200).json(markers);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch markers from vital" });
    }
}));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
