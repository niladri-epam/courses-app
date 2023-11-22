import React from 'react';

const AuthorItem = ({
	au,
	add,
	existing,
	removeCourseAuthorHandler,
	removeAuthorHandler,
	addCourseAuthorHandler,
}) => {
	return (
		<tr>
			<td>{au.name}</td>
			{add ? (
				<td>
					<span
						class='material-symbols-outlined'
						onClick={() => addCourseAuthorHandler(au.id)}
					>
						add
					</span>
				</td>
			) : (
				''
			)}
			<td>
				{existing ? (
					<span
						class='material-symbols-outlined'
						onClick={() => removeCourseAuthorHandler(au.id)}
					>
						delete
					</span>
				) : (
					<span
						class='material-symbols-outlined'
						onClick={() => removeAuthorHandler(au.id)}
					>
						delete
					</span>
				)}
			</td>
		</tr>
	);
};

export default AuthorItem;
