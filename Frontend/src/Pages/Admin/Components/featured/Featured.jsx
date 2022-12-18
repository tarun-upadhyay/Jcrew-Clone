import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="afeatured">
      <div className="atop">
        <h1 className="atitle">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="abottom">
        <div className="afeaturedChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="atitle">Total sales made today</p>
        <p className="aamount">$420</p>
        <p className="adesc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="asummary">
          <div className="aitem">
            <div className="aitemTitle">Target</div>
            <div className="aitemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="aresultAmount">$12.4k</div>
            </div>
          </div>
          <div className="aitem">
            <div className="aitemTitle">Last Week</div>
            <div className="aitemResult apositive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="aresultAmount">$12.4k</div>
            </div>
          </div>
          <div className="aitem">
            <div className="aitemTitle">Last Month</div>
            <div className="aitemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="aresultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;