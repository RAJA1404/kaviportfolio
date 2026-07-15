import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

// Auto-copy the user's uploaded profile photo from AppData folder to public/profile.jpg
try {
  const publicDir = path.join(process.cwd(), "public");
  const targetPath = path.join(publicDir, "profile.jpg");

  const sourceDir = "C:/Users/ELCOT/.gemini/antigravity-ide/brain/fa75dea2-0307-428f-90db-20b2043a47ce";
  if (fs.existsSync(sourceDir)) {
    const files = fs.readdirSync(sourceDir);
    const mediaFiles = files
      .filter(f => f.startsWith("media__") && (f.endsWith(".jpg") || f.endsWith(".jpeg") || f.endsWith(".png") || f.endsWith(".webp")))
      .sort();
    
    if (mediaFiles.length > 0) {
      const latestMedia = mediaFiles[mediaFiles.length - 1];
      const sourcePath = path.join(sourceDir, latestMedia);
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`[Auto-Setup] Successfully copied ${latestMedia} to public/profile.jpg`);

      // Clean up placeholder SVG as requested
      const placeholderPath = path.join(publicDir, "profile.svg");
      if (fs.existsSync(placeholderPath)) {
        fs.unlinkSync(placeholderPath);
        console.log("[Auto-Setup] Removed profile.svg placeholder");
      }
    }
  }
} catch (err) {
  console.warn("[Auto-Setup] Skipping profile photo copy:", err);
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
