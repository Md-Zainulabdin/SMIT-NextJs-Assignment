import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), "data", "products.json");

export function getProduct () {
    const data = JSON.parse(fs.readFileSync(filePath));
    return data;
}