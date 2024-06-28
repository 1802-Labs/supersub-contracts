import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';
import hre from 'hardhat';

const SubscriptionPluginModule = buildModule('SubscriptionPluginModule', (m) => {
  const baseSepoliaChainId = 84532;
  const baseChainId = 8453;
  const baseSepoliaCCIPRouter = '0xD3b06cEbF099CE7DA4AcCf578aaebFDBd6e88a93';
  const baseSepoliaLink = '0xE4aB69C077896252FAFBD49EFD26B5D171A32410';
  const baseSepoliaDestinationChains = [
    '14767482510784806043', // Avalanche Fuji
    '3478487238524512106', // Arbitrum Sepolia
    '13264668187771770619', // BNB Testnet
    '16015286601757825753', // Ethereum Sepolia
    '5224473277236331295', // Optimism
  ];
  const baseSepoliaCCIPBridge = m.contract('SubscriptionTokenBridge', [baseSepoliaCCIPRouter, baseSepoliaLink, baseSepoliaDestinationChains]);
  const baseSepoliaSubscriptionPlugin = m.contract('SubscriptionPlugin', [baseSepoliaChainId, baseSepoliaCCIPBridge]);
  return { baseSepoliaCCIPBridge, baseSepoliaSubscriptionPlugin };
});

export default SubscriptionPluginModule;