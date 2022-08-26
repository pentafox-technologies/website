import IsServer from "./IsServer";

export default function IsMobile() {
  if (!IsServer()) {
    return window.innerWidth <= 767;
  }
}
