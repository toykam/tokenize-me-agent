import { randomBytes, createCipheriv, createDecipheriv } from 'crypto';

// Encryption key (in production, use a KMS or securely stored key)
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY!; // 32 bytes for AES-256
const ALGORITHM = 'aes-256-gcm';

if (ENCRYPTION_KEY.length !== 32) {
  throw new Error('ENCRYPTION_KEY must be 32 bytes (256 bits) for AES-256');
}

export interface EncryptedData {
  encrypted: string;
  iv: string;
  authTag: string;
}

export function encryptPrivateKey(privateKey: string): EncryptedData {
  // Generate a random IV (Initialization Vector)
  const iv = randomBytes(12); // 12 bytes for AES-GCM

  // Create the cipher
  const cipher = createCipheriv(ALGORITHM, Buffer.from(ENCRYPTION_KEY), iv);

  // Encrypt the private key
  let encrypted = cipher.update(privateKey, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  // Get the authentication tag
  const authTag = cipher.getAuthTag().toString('hex');

  return {
    encrypted,
    iv: iv.toString('hex'),
    authTag,
  };
}

export function decryptPrivateKey(encryptedData: EncryptedData): string {
  const { encrypted, iv, authTag } = encryptedData;

  // Create the decipher
  const decipher = createDecipheriv(
    ALGORITHM,
    Buffer.from(ENCRYPTION_KEY),
    Buffer.from(iv, 'hex')
  );

  // Set the authentication tag
  decipher.setAuthTag(Buffer.from(authTag, 'hex'));

  // Decrypt the private key
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}