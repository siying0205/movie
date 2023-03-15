import React from 'react'
import Input from '@mui/joy/Input'
import SearchIcon from '@mui/icons-material/Search'

const Search = () => {
  return (
    <Input
      placeholder="Search for a movie…"
      endDecorator={
        <SearchIcon
          sx={{
            color: '#d88769',
            fontSize: '30px',
          }}
        />
      }
      sx={{
        width: '60%',
        height: '50px',
        margin: '0 auto',
        color: '#fff',
        marginTop: '50px',
        backgroundColor: '#1f2123',
        borderRadius: '20px',
        border: 'none',
        boxShadow: '2px 3px 8px 0px rgba(0,0,0,0.75)',
      }}
    />
  )
}

export default Search
