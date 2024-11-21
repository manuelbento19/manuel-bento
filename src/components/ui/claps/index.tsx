import { ClapButton } from "./button";
import { getClaps } from "@/actions/claps";

export async function Claps({ slug }:{slug: string;}) {
  const claps = await getClaps(slug);

  return <ClapButton claps={claps} slug={slug} />
}
