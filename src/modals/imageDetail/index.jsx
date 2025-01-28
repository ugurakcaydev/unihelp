function ImageDetailModal(data) {
  console.log(data, "image detail");
  return (
    <div className="w-full h-[550px]  p-3 rounded-md overflow-hidden">
      <img
        className="w-full h-full object-contain "
        src={`${data.post[0]}`}
        alt=""
      />
    </div>
  );
}

export default ImageDetailModal;
