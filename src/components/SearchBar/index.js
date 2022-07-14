import React, { useState } from 'react';

export const SearchBar = () => {
	const [search, setSearch] = useState('');

	// useEffect, search api

	return (
		<>
			<select type=''>
				<option value=''>Category</option>
				<option value='books'>Books</option>
				<option value='users'>Users</option>
				<option value='threads'>Threads</option>
			</select>
			<form>
				<label htmlFor='search'>Search</label>
				<input id='search' type='text' value={search} />
				<input type='submit' onChange='' value='Search' />
			</form>
		</>
	);
};
