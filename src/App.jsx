import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Homepage from "./pages/Homepage"
import ResearchContext from './contexts/ResearchContext'
import axios from 'axios'

function App() {
  const [reSearch, setReSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);
  const api_key = '762a7f1b7f5c78518951ca2fe4627d1a'
  const movieUrl = 'https://api.themoviedb.org/3/search/movie';
  const tvSeriesUrl = 'https://api.themoviedb.org/3/search/tv';

  useEffect(() => {
    reSearch &&
      axios.get(movieUrl, {
        params: {
          api_key,
          query: reSearch
        }
      }).then((res) => {
        setMovies(res.data.results)
      }).catch((err) => console.error(err))

    reSearch &&
      axios.get(tvSeriesUrl, {
        params: {
          api_key,
          query: reSearch
        }
      }).then((res) => {
        const mappedSeries = res.data.results.map((serie) => {
          return {
            ...serie,
            title: serie.name,
            original_title: serie.original_name
          }
        })
        setTvSeries(mappedSeries)
        console.log(tvSeries)
      }).catch((err) => console.error(err))

  }, [reSearch])


  return (
    <ResearchContext.Provider value={{ reSearch, setReSearch, movies, tvSeries }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ResearchContext.Provider>
  )
}

export default App
