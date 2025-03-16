export const Card = ({ id, description, name, tags, link, backGround, image, header }) => {
  return (
    <div id={id} className="project-grid col-start-2 col-end-3 h-full">
      <div
        className="project-grid-card gradient-background rounded-2xl border-1.5 z-20 h-full flex flex-col"
        key={id}
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex hover:shadow-lg transition-shadow duration-300 overflow-hidden rounded-2xl ${backGround} h-full flex flex-col justify-between`}
        >
          <div className="card-content pb-[40px] flex-1 flex flex-col">
            <div className={`${header} pt-[20px] pb-[10px] px-[40px] flex-1`}>
              <h2 className="text-2xl md:text-5xl font-bold mb-2">{name}</h2>
              <p className="text-sm mb-4 leading-[1.4]">{description}</p>
              <div className="tags mb-4">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <picture className="w-full md:block md:h-[200px] px-[40px] pt-[40px]">
              <source
                type="image/webp"
                media="(max-width:600px)"
                srcSet={`${image}?w=300 300w, ${image}?w=600 600w`}
                sizes="(max-width: 600px) 300px, 600px"
              />
              <source
                type="image/jpeg"
                media="(max-width:600px)"
                srcSet={`${image}?w=300 300w, ${image}?w=600 600w`}
                sizes="(max-width: 600px) 300px, 600px"
              />
              <img
                loading="eager"
                decoding="async"
                src={`${image}?w=600`}
                alt="heroimg"
                id="heroimg"
                className="border-2 border-white rounded-[20px] w-full md:h-full object-cover"
              />
            </picture>
          </div>
        </a>
      </div>
    </div>
  );
};