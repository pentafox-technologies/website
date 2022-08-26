export default function IsServer() {
  return !(typeof window !== "undefined" && window.document);
}
