/**
 * StackPulse Utils - Utility functions
 * @module stackpulse-utils
 */
const VERSION = '0.1.0';
function formatAddress(address, start = 6, end = 4) {
  if (!address || address.length <= start + end) return address;
  return `${address.slice(0, start)}...${address.slice(-end)}`;
}
module.exports = { formatAddress, VERSION };
