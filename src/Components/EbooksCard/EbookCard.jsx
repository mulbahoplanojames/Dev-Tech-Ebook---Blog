import Button from "../../Interfaces/Button";
import { Link } from "react-router-dom";

/**
 * Component for displaying an ebook card.
 *
 * @param {Object} props - The properties of the component.
 * @param {string} props.title - The title of the ebook.
 * @param {string} props.image - The URL of the image for the ebook.
 * @param {string} props.href - The URL to navigate to when the download button is clicked.
 * @return {JSX.Element} The rendered ebook card.
 */
const EbookCard = (props) => {
  // Destructure the props
  const { title, image, href } = props;

  return (
    // Render the ebook card
    <>
      <div className="">
        <div className="h-80 hover:shadow-1 hover:scale-110 w-64 overflow-hidden transition duration-300 rounded-lg shadow-2xl cursor-pointer">
          <div className="h-52 w-full">
            {/* Render the image of the ebook */}
            <img
              src={image}
              alt=""
              className="object-scale-down w-full h-full"
            />
          </div>
          <div className="text-center">
            {/* Render the title of the ebook */}
            <h1 className="py-3 text-2xl">{title}</h1>
            {/* Render the download button */}
            <Link to={href}>
              <Button
                text={"View and Download"}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0 });
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EbookCard;
