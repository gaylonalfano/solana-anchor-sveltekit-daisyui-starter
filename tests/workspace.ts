import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Workspace } from "../target/types/workspace";

describe("workspace", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Workspace as Program<Workspace>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
