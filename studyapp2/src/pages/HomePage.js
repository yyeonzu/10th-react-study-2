import React from 'react';
import styled from 'styled-components';

const HomePage = ({ posts }) => {
	return (
		// map을 활용해 posts를 렌더링 하세요
		<div>
			{posts.map(post => (
				<Text key={post.id}>
					{post.title} : {post.content}
				</Text>
			))}
		</div>
	);
};

export default HomePage;

const Text = styled.p`
	// post를 꾸미세요
	border: solid;
	padding: 5px;
`;
