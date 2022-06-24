import DashboardIcon from '@mui/icons-material/Dashboard';
import CachedIcon from '@mui/icons-material/Cached';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ReceiptIcon from '@mui/icons-material/Receipt';

const itemList = [
    {
        text: "dashboard",
        icon: <DashboardIcon />,
        route: "dashboard"
    },
    {
        text: "transactions",
        icon: <CachedIcon />,
        route: "transactions"
    },
    {
        text: "users",
        icon: <PeopleAltIcon />,
        route: "users"
    },
    {
        text: "payouts",
        icon: <ReceiptIcon />,
        route: "payouts"
    }
];

export default itemList;