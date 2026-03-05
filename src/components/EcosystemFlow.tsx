"use client";

import { useCallback } from "react";
import {
  ReactFlow,
  Background,
  type Node,
  type Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion } from "framer-motion";

const nodeStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "12px",
  padding: "16px",
  width: 180,
  textAlign: "center" as const,
  transition: "border-color 0.3s, box-shadow 0.3s",
};

const centerNodeStyle = {
  ...nodeStyle,
  width: 200,
  border: "1.5px solid #06b6d4",
  boxShadow: "0 0 20px rgba(6,182,212,0.3)",
};

function ProductNode({ data }: { data: { icon: string; label: string; tagline: string } }) {
  return (
    <div
      style={nodeStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#06b6d4";
        e.currentTarget.style.boxShadow = "0 0 15px rgba(6,182,212,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ fontSize: 24, marginBottom: 6 }}>{data.icon}</div>
      <div style={{ fontWeight: 700, color: "#fff", fontSize: 14, marginBottom: 4 }}>
        {data.label}
      </div>
      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, lineHeight: 1.4 }}>
        {data.tagline}
      </div>
    </div>
  );
}

function CenterNode({ data }: { data: { label: string; sublabel: string } }) {
  return (
    <div style={centerNodeStyle}>
      <div style={{ fontWeight: 800, color: "#fff", fontSize: 16, marginBottom: 4 }}>
        {data.label}
      </div>
      <div style={{ color: "rgba(6,182,212,0.8)", fontSize: 11 }}>{data.sublabel}</div>
    </div>
  );
}

const nodeTypes = {
  product: ProductNode,
  center: CenterNode,
};

const CX = 400;
const CY = 300;

const nodes: Node[] = [
  {
    id: "center",
    type: "center",
    position: { x: CX - 100, y: CY - 30 },
    data: { label: "Your Business", sublabel: "The center of the ecosystem" },
    draggable: true,
  },
  {
    id: "kodus",
    type: "product",
    position: { x: CX - 320, y: CY - 200 },
    data: { icon: "⚖️", label: "Kodus Legal", tagline: "AI for Law · 3M+ legal docs" },
    draggable: true,
  },
  {
    id: "hecate",
    type: "product",
    position: { x: CX + 140, y: CY - 200 },
    data: { icon: "🔮", label: "Hecate", tagline: "CI/CD Intelligence · Your pipeline, smarter" },
    draggable: true,
  },
  {
    id: "cimenta",
    type: "product",
    position: { x: CX - 320, y: CY + 140 },
    data: { icon: "🏗️", label: "Cimenta", tagline: "Construction AI · From blueprints to budgets" },
    draggable: true,
  },
  {
    id: "taskhive",
    type: "product",
    position: { x: CX + 140, y: CY + 140 },
    data: { icon: "🐝", label: "TaskHive", tagline: "AI Agent Orchestration · Agents that execute" },
    draggable: true,
  },
  {
    id: "consulting",
    type: "product",
    position: { x: CX - 90, y: CY - 260 },
    data: { icon: "🧠", label: "CM Consulting", tagline: "AI Strategy · We implement, not just advise" },
    draggable: true,
  },
];

const edgeDefaults = {
  type: "smoothstep" as const,
  animated: true,
  style: { stroke: "#06b6d4", strokeWidth: 1.5, opacity: 0.6 },
};

const edges: Edge[] = [
  { id: "e-center-kodus", source: "center", target: "kodus", ...edgeDefaults },
  { id: "e-center-hecate", source: "center", target: "hecate", ...edgeDefaults },
  { id: "e-center-cimenta", source: "center", target: "cimenta", ...edgeDefaults },
  { id: "e-center-taskhive", source: "center", target: "taskhive", ...edgeDefaults },
  { id: "e-center-consulting", source: "center", target: "consulting", ...edgeDefaults },
];

export default function EcosystemFlow() {
  const onInit = useCallback(() => {}, []);

  return (
    <section
      style={{
        background: "linear-gradient(180deg, transparent 0%, #0a0a0a 5%, #0a0a0a 95%, transparent 100%)",
        padding: "80px 0 60px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 12,
            }}
          >
            The Ecosystem
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16 }}>
            AI products that work together. Drag them around.
          </p>
        </motion.div>

        <div
          style={{
            height: 650,
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 0 40px rgba(6,182,212,0.05)",
            overflow: "hidden",
          }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onInit={onInit}
            nodesDraggable={true}
            fitView={true}
            zoomOnScroll={false}
            panOnScroll={false}
            zoomOnDoubleClick={false}
            preventScrolling={false}
            proOptions={{ hideAttribution: true }}
            style={{ background: "#0a0a0a" }}
          >
            <Background color="rgba(255,255,255,0.05)" gap={20} size={1} />
          </ReactFlow>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.25)",
            fontSize: 12,
            marginTop: 16,
          }}
        >
          Drag the nodes. They won&apos;t break.
        </p>
      </div>
    </section>
  );
}
