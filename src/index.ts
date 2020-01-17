import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap("map");

// Best approach
customMap.addMarker(user);
customMap.addMarker(company);

// Bad approach
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
