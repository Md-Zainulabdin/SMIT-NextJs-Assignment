// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getProduct } from "../../../services";

export default function handler(req, res) {
  if (req.method === "GET") {
    const products = getProduct();
    return res.status(200).json(products)
  }

  return res.status(404).send();
}
