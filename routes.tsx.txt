import TrainerApp from "./pages/TrainerApp"
import Marketplace from "./pages/Marketplace"
import CreditsOverview from "./pages/CreditsOverview"
import TeamManagement from "./pages/TeamManagement"
import EnterpriseHub from "./pages/EnterpriseHub"
import CreatorTools from "./pages/CreatorTools"
import CreatorEconomics from "./pages/CreatorEconomics"
import BioNexus from "./pages/BioNexus"
import GymPartnerPortal from "./pages/GymPartnerPortal"

export const appRoutes = [
  { path: "/", component: TrainerApp },
  { path: "/marketplace", component: Marketplace },
  { path: "/credits", component: CreditsOverview },
  { path: "/team", component: TeamManagement },
  { path: "/enterprise", component: EnterpriseHub },
  { path: "/creator-tools", component: CreatorTools },
  { path: "/creator-economics", component: CreatorEconomics },
  { path: "/bionexus", component: BioNexus },
  { path: "/gym-partner", component: GymPartnerPortal }
]
