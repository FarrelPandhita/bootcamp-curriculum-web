import { Tool } from "@/types/curriculum";

export const curriculumTools: Tool[] = [
  {
    id: "tool-1",
    name: "Cisco Packet Tracer",
    subtitle: "Network Simulation Tool",
    stage: 1,
    weekRange: "Weeks 1-4",
    why: "The industry standard for learning networking fundamentals. Allows you to build, configure, and troubleshoot complex topologies without needing physical hardware.",
    features: ["Visual packet flow simulation", "Device CLI access", "Real-time protocol inspection"],
    color: "#0d9488",
  },
  {
    id: "tool-2",
    name: "GNS3 / EVE-NG",
    subtitle: "Advanced Network Emulators",
    stage: 2,
    weekRange: "Weeks 5-10",
    why: "Unlike simulators, emulators run actual network OS images (Cisco IOS, FortiOS). This prepares you for the exact behaviors you will see in a production environment.",
    features: ["Real router/switch images", "Integration with Wireshark", "Multi-vendor topology support"],
    color: "#2563eb",
  },
  {
    id: "tool-3",
    name: "Wireshark",
    subtitle: "Packet Analyzer",
    stage: 3,
    weekRange: "Weeks 9-16",
    why: "Network engineers must be able to 'see' the traffic. Wireshark allows you to inspect packets at a microscopic level to find the root cause of complex issues.",
    features: ["Deep packet inspection", "Protocol decryption", "Traffic flow analysis"],
    color: "#16a34a",
  },
  {
    id: "tool-4",
    name: "Python & Netmiko",
    subtitle: "Network Automation",
    stage: 4,
    weekRange: "Weeks 15-16",
    why: "The future of networking is programmable. Learning to script repetitive tasks saves hours of manual work and prevents human error.",
    features: ["SSH automation", "Configuration parsing", "Bulk deployment scripts"],
    color: "#f59e0b",
  },
];
