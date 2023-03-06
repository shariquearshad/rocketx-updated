import { Component } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent {
cards=[
  {
    name:"swap",
    icon:'./assets/icons/card.png',
    content:"A swap is a token swap where the tokens are being swapped on the same network"
  },
  {
    name:"Cross-Chain Swap",
    icon:'./assets/icons/card.png',
    content:"A Cross-chain swap is a token swap where both the source and destination networks & tokens are different"
  },
  {
    name:"Bridge",
    icon:'./assets/icons/card.png',
    content:"A bridge is a swap where the source and destination tokens are the same but the source and destination networks are differen"
  },
  {
    name:"Connect-less Swaps",
    icon:'./assets/icons/card.png',
    content:"As a RocketX ambassador, you'll receive exclusive benefits, training, and support to help you promote our platform to your community. Help us revolutionize crypto exchange and be a part of our mission. Apply to be an ambassador now!"
  },
  {
    name:"Sell Crypto",
    icon:'./assets/icons/card.png',
    content:"You can buy (or exchange one crypto for another) crypto with fiat using any payment methods like bank transfer, SEPA, Apple Pay, Google Pay or any of the supported local payments. We currently support 16 payment methods across 180+ countries"
  },
  {
    name:"Sell Crypto",
    icon:'./assets/icons/card.png',
    content:"Sell your crypto for fiat currency in a few easy steps with RocketX. Our platform offers a simple and secure way to convert your digital assets into the currency of your choice. No complicated processes, no hidden fees. Sell crypto and get the most out of your investments with RocketX"
  },
  {
    name:"Referral/Affiliate Program",
    icon:'./assets/icons/card.png',
    content:"Join our referral program and earn rewards for sharing RocketX with your network. Every time a friend signs up and trades using your unique referral link, you both receive a bonus. It's a win-win for everyone involved. Start earning today!"
  },
  {
    name:"Sell Crypto",
    icon:'./assets/icons/card.png',
    content:"You can buy (or exchange one crypto for another) crypto with fiat using any payment methods like bank transfer, SEPA, Apple Pay, Google Pay or any of the supported local payments. We currently support 16 payment methods across 180+ countries"
  },
  {
    name:"Sell Crypto",
    icon:'./assets/icons/card.png',
    content:"Sell your crypto for fiat currency in a few easy steps with RocketX. Our platform offers a simple and secure way to convert your digital assets into the currency of your choice. No complicated processes, no hidden fees. Sell crypto and get the most out of your investments with RocketX"
  }
]
}
