import s from './Loader.module.css'
import {CircularProgress} from "@mui/material";

export const Loader = () => <div className={s.loader}>
    <CircularProgress sx={{color: "#0066CC"}} size="90px" aria-label="Loading…" />
</div>
