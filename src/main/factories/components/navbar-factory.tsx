import { makeAuthUseCase } from "modules/auth/main/factories/usecases";
import { Navbar } from "../../../core/components";

export const MakeNavbar = () => (
  <Navbar useAuththentication={makeAuthUseCase()} />
);
