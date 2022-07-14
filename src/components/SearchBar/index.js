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
			<form role='form' onSubmit={handleSubmit}>
				<label htmlFor='search'>Search</label>
				<input id='search' type='text' onChange={updateInput} value={search} />
				<input type='submit' value='Search' />
			</form>
		</>
	);
};
