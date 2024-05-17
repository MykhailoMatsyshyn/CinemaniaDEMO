import cl from "./MyModal.module.css"

const MyModal = ({children, visible, setVisible, customStyle, width = "670px"}) => {
	
	const rootClasses = [cl.myModal]

	if (visible) {
    rootClasses.push(cl.active)
  }
	
	return (
		<div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
			<div
				style={{width: `${width}`}}
				className={` ${cl.myModalContent} ${customStyle ? cl[customStyle] : ""}`}
				onClick={(e) => e.stopPropagation()}
				>
					{children}
			</div>
		</div>
	);
}

export default MyModal;
