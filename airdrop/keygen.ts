import { Keypair } from "@solana/web3.js";

// Yeni bir anahtar çifti oluşturma
let kp = Keypair.generate();
console.log(`Yeni bir Solana cüzdanı oluşturdunuz: ${kp.publicKey.toBase58()}`);
console.log(`Solana Cüzdan Gizli Anahtarı: ${kp.secretKey}`); 

//  3tXdFF2r5tS4BCySR6AVgS3emjMW8CE4v4VpqSvzU7Na

