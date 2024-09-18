import { Transaction, SystemProgram, Connection, Keypair, LAMPORTS_PER_SOL, sendAndConfirmTransaction, PublicKey } from "@solana/web3.js";
import wallet from "./dev-wallet.json";

// 3tXdFF2r5tS4BCySR6AVgS3emjMW8CE4v4VpqSvzU7Na (Genel anahtar)
const to = new PublicKey("3tXdFF2r5tS4BCySR6AVgS3emjMW8CE4v4VpqSvzU7Na"); 

const from = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection("https://api.devnet.solana.com");

(async () => {
    try {
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: from.publicKey,
                toPubkey: to, // İkinci cüzdana gönder
                lamports: LAMPORTS_PER_SOL / 100, 
            })
        );
        transaction.recentBlockhash = (await connection.getLatestBlockhash('confirmed')).blockhash;
        transaction.feePayer = from.publicKey;

        const signature = await sendAndConfirmTransaction(
            connection,
            transaction,
            [from]
        );
        console.log(`İşlem başarıyla gerçekleşti! İşlemi burada kontrol edebilirsiniz: 
        https://explorer.solana.com/tx/${signature}?cluster=devnet`);
    } catch (e) {
        console.error(`Bir hata oluştu: ${e}`);
    }
})();