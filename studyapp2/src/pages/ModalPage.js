import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalPage = () => {
	// 1) useRef 변수를 선언하세요
	// 2) 모달창의 open 상태를 관리하는 useState를 선언하세요

	const clickSection = useRef();
	const [isOpen, setIsOpen] = useState(true);

	const modalHandler = ({ target }) => {
		// 1) 만약, 모달이 열려있고, 현재 클릭된 부분이 target을 포함하고 있지 않다면,
		// 2) 모달창의 상태를 false로 바꾸세요
		if (isOpen && !clickSection.current.contains(target)) setIsOpen(false);
	};

	useEffect(() => {
		// 1) 윈도우가 'click'되었을 때 modalHandler가 실행되도록 이벤트를 추가합니다.
		window.addEventListener('click', modalHandler);
		return () => {
			// 2) 윈도우에서 modalHandler 이벤트를 삭제시킵니다.
			window.removeEventListener('click', modalHandler);
		};
	});

	return (
		// 1) 코드를 알맞게 수정하세요
		<div> {isOpen && <Modal ref={clickSection}> 모달창 입니다. </Modal>}</div>
	);
};

export default ModalPage;

const Modal = styled.div`
	// 모달창을 꾸미세요
	background-color: pink;
	width: 300px;
	height: 300px;
`;
