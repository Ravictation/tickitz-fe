import React, { useRef, useState, useEffect } from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import useApi from '../../helpers/useApi'
import Pagination from "../../component/pagination"
import noimage from "../../assets/noimage.png"
import { useDispatch } from 'react-redux'
import { Link, useParams, useNavigate } from "react-router-dom";
import { logout } from '../../store/reducer/user'
import moment from "moment/moment";
import Select from "react-select";

function Manage_Movie() {
    const params = useParams()
    const api = useApi()
    const navigates = useNavigate();
    const dateRef = useRef(null);
    const setdate = useRef(null);
    const imgRef = useRef(null);
    const dispatch = useDispatch()

    const [director, setdirector] = useState([]);
    const [genre, setgenre] = useState([]);
    const [cast, setcast] = useState([]);
    const [premier, setpremier] = useState([]);

    const getDirector = async () => {
        try {
            const { data } = await api({
                method: 'get', url: `/directors/?limit=1000`
            });
            setdirector(data.data);
        } catch (error) {
            setdirector(false);
            console.log(error.response.data);
        }
    };
    const getCategory = async () => {
        try {
            const { data } = await api({
                method: 'get', url: `/genres/?limit=1000`
            });
            setgenre(data.data);
        } catch (error) {
            setgenre(false);
            console.log(error.response.data);
        }
    };
    const getCast = async () => {
        try {
            const { data } = await api({
                method: 'get', url: `/casts/?limit=10000`
            });
            setcast(data.data);
        } catch (error) {
            setcast(false);
            console.log(error.response.data);
        }
    };

    const getPremier = async () => {
        try {
            const { data } = await api({
                method: 'get', url: `/premiers/?limit=1000`
            });
            setpremier(data.data);
        } catch (error) {
            setpremier(false);
            console.log(error.response.data);
        }
    };

    const [id_movie, setid_movie] = useState("");
    const [title, settitle] = useState("");
    const [id_director, setid_director] = useState("");
    const [release_date, setrelease_date] = useState("");
    const [image, setimage] = useState("");
    const [imagereader, setimagereader] = useState("");
    const [synopsis, setsynopsis] = useState("");
    const [movie_id_cast, setmovie_id_cast] = useState([]);
    const [movie_id_genre, setmovie_id_genre] = useState([]);
    const [duration_hour, setduration_hour] = useState("");
    const [duration_minute, setduration_minute] = useState("");

    const [price, setprice] = useState("");
    const [locations, setlocations] = useState("");
    const [set_date, setset_date] = useState("");
    const [set_premiers, setset_premiers] = useState([]);
    const [times, settimes] = useState([]);
    const [time, settime] = useState("");


    const optionsgenre = [{ label: "Select Director", value: 1, disabled: true }];
    if (genre) {
        genre.map((v) =>
            optionsgenre.push({ value: v.id_genre, label: v.name_genre })
        );
    }

    const optionscast = [{ label: "Select Cast", value: 1, disabled: true }];
    if (cast) {
        cast.map((v) => optionscast.push({ value: v.id_cast, label: v.name_cast }));
    }

    const optionspremier = [{ label: "Select Premier", value: 1, disabled: true }];
    if (premier) {
        premier.map((v) => optionspremier.push({ value: v.id_premier, label: v.name_premier }));
    }


    const addtotimes = (e) => {
        e.preventDefault();
        const pick_times = [];
        times.map((e) => pick_times.push(e));
        if (time != "") {
            if (pick_times.length > 0) {
                let counts = 0
                pick_times.map((e) => e != time ? "" : counts = counts + 1);
                if (counts == 0) {
                    pick_times.push(time)
                } else {
                    console.log("time is already")
                }
            } else {
                pick_times.push(time)
            }
            settimes(pick_times)
        }
    }

    const [deltime, setdeltime] = useState("");
    const deletetotimes = () => {
        const pick_times = [];
        times.map((e) => e != deltime ? pick_times.push(e) : "");
        settimes(pick_times)
    }

    //PICK DATA FOR UPDATE

    const [movie, setmovie] = useState([]);
    const getMovie = async () => {
        if (params.id != "add") {
            const movie_id_cast_u = [];
            const movie_id_genre_u = [];
            try {
                const { data } = await api({ method: 'get', url: `/movies/${params.id}` });
                settitle(data.data[0].title);
                setid_director(data.data[0].directors[0].id_director);
                setduration_hour(data.data[0].duration_hour);
                setduration_minute(data.data[0].duration_minute);
                setsynopsis(data.data[0].synopsis);
                setrelease_date(data.data[0].release_date);
                setimage(data.data[0].image);
                if (data.data[0].casts) {
                    data.data[0].casts.map((v) =>
                        movie_id_cast_u.push({ value: v.id_cast, label: v.name_cast })
                    );
                }
                setmovie_id_cast(movie_id_cast_u);

                if (data.data[0].genres) {
                    data.data[0].genres.map((v) =>
                        movie_id_genre_u.push({ value: v.id_genre, label: v.name_genre })
                    );
                }
                setmovie_id_genre(movie_id_genre_u);

            } catch (error) {
                setmovie(false);
                console.log(error.response.data);
            }
        }
    };
    const [movie_details, setmovie_details] = useState([]);
    const getMovie_details = async () => {
        if (params.id != "add") {
            const locations_u = [];
            const times_u = [];
            const premiers_u = [];
            try {
                const { data } = await api({ method: 'get', url: `/times_schedules/?movie=${params.id}&limit=100` });
                setprice(data.data[0].price)
                setset_date(data.data[0].set_date)
                data.data.map((v) => {
                    locations_u.includes(v.regency) == true ? "" : locations_u.push(v.regency)
                    times_u.includes(v.time_schedule.split(":")[0] + ":" + v.time_schedule.split(":")[1]) == true ? "" : times_u.push(v.time_schedule.split(":")[0] + ":" + v.time_schedule.split(":")[1])
                    if (premiers_u.length > 0) {
                        let count = 0
                        premiers_u.map((val) => {
                            count = val.value == v.id_premier ? count + 1 : count
                        })
                        if (count == 0) {
                            premiers_u.push({ value: v.id_premier, label: v.name_premier })
                        }
                    } else {
                        premiers_u.push({ value: v.id_premier, label: v.name_premier })
                    }
                })
                setlocations(locations_u.join(","))
                setset_premiers(premiers_u)
                settimes(times_u)
            } catch (error) {
                setmovie_details(false);
                console.log(error.response.data);
            }
        }
    };

    // INSERT & UPDATE DATA
    const pick_movie_id_genre = [];
    const pick_movie_id_cast = [];
    const pick_premiers = [];
    const pick_times = [];
    movie_id_cast.map((e) => pick_movie_id_cast.push(e.value));
    movie_id_genre.map((e) => pick_movie_id_genre.push(e.value));
    set_premiers.map((e) => pick_premiers.push(e.value));
    times.map((e) => pick_times.push(e + ":00"));

    const formData = new FormData();
    formData.append("title", title);
    formData.append("id_director", id_director);
    formData.append("synopsis", synopsis);
    formData.append("duration_hour", duration_hour);
    formData.append("duration_minute", duration_minute);
    formData.append("release_date", release_date);
    pick_movie_id_cast.forEach((pick_movie_id_cast) =>
        formData.append("casts", pick_movie_id_cast)
    );
    pick_movie_id_genre.forEach((pick_movie_id_genre) =>
        formData.append("genres", pick_movie_id_genre)
    );
    formData.append("image", image);
    formData.append("price", price);
    formData.append("locations", locations);
    formData.append("set_date", set_date);
    pick_premiers.forEach((pick_premiers) =>
        formData.append("premiers", pick_premiers)
    );
    pick_times.forEach((pick_times) =>
        formData.append("times", pick_times)
    );

    const insert_data = async (e) => {
        e.preventDefault();
        try {
            let data = [];
            if (params.id == "add") {
                data = await api({
                    method: 'post', url: "/movies/",
                    data: formData,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                });
            } else {
                data = await api({
                    method: 'put', url: `/movies/${params.id}`,
                    data: formData,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                });
            }
            console.log(data.data);
        } catch (error) {
            if (error.response.data.status == 401) {
                dispatch(logout())
                navigates(`/sign-in`)
            }
            console.log(error.response.data);
        }
    };

    // RESET FORM
    const reset_form = (e) => {
        e.preventDefault();
        setid_movie('')
        settitle('')
        setid_director('')
        setrelease_date('')
        setmovie_id_cast([])
        setmovie_id_genre([])
        setduration_hour('')
        setduration_minute('')
        setsynopsis('')
        setimagereader('')
        setimage('')
        setprice('')
        setlocations('')
        setset_date('')
        settime('')
        setset_premiers([])
        settimes([])
    }

    // ----------------------------------------------
    useEffect(() => {
        document.title = "Manage Movie";
        getDirector();
        getCategory();
        getCast();
        getPremier();
        getMovie();
        getMovie_details();
    }, []);
    useEffect(() => {
        deletetotimes();
    }, [deltime]);

    return (
        <>
            <Navbar />
            <section className='bg-background py-5 flex justify-center'>
                <div className="grid grid-row-3 bg-white rounded-md py-5 w-4/5 md:w-3/6 p-5">
                    <h1 className="font-[#14142B] font-semibold text-xl">Add Movie</h1>
                    <div className="grid grid-cols-1 grid-rows-[350px_1fr]">
                        <div className="flex justify-around">
                            <div className="w-48 m-5 md:m-0 p-5 border rounded-xl">
                                <Link id="file" onClick={() => { imgRef.current.showPicker(); }} >
                                    <img
                                        className="h-full object-cover rounded-xl my-4"
                                        src={
                                            imagereader == ""
                                                ? image == ""
                                                    ? noimage
                                                    : image
                                                : imagereader
                                        }
                                        alt="click to upload poster"
                                    />
                                </Link>
                                <input
                                    type="file"
                                    ref={imgRef}
                                    multiple
                                    accept="image/*"
                                    onChange={(e) => [
                                        setimage(e.target.files[0]),
                                        setimagereader(URL.createObjectURL(e.target.files[0])),
                                    ]}
                                    className="hidden h-10 w-full border rounded pl-3"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="grid">
                                <div className="grid">
                                    <div className="mb-5">
                                        <h6 className="text-[#8692A6] text-md tracking-wider mb-3">
                                            Movie Name
                                        </h6>
                                        <p className="text-sm tracking-wider mb-3">
                                            <input
                                                type="text"
                                                onChange={(e) => settitle(e.target.value)}
                                                value={title}
                                                className="h-10 w-full border rounded pl-3 placholder:text-[#121212]"
                                                placeholder="Title movie ..."
                                            />
                                        </p>
                                    </div>
                                    <div className="mb-5">
                                        <h6 className="text-[#8692A6] text-md tracking-wider mb-3">
                                            Director
                                        </h6>
                                        <select
                                            onChange={(e) =>
                                                e.target.value == ""
                                                    ? setid_director("")
                                                    : setid_director(e.target.value)
                                            }
                                            className={
                                                (id_director == "" ? "text-[#8692A6]" : "text-black") +
                                                " text-sm tracking-wider mb-3 h-10 w-full border rounded pl-3 appearance-none"
                                            }
                                        >
                                            <option
                                                className="text-sm text-[#8692A6]"
                                                value=""
                                                disabled
                                                selected
                                            >
                                                Select Director ...
                                            </option>
                                            {director
                                                ? director.map((v) =>
                                                    id_director == v.id_director ? (
                                                        <option
                                                            className="text-black"
                                                            key={v.id_director}
                                                            selected
                                                            value={v.id_director}
                                                        >
                                                            {v.name_director}
                                                        </option>
                                                    ) : (
                                                        <option
                                                            className="text-black"
                                                            key={v.id_director}
                                                            value={v.id_director}
                                                        >
                                                            {v.name_director}
                                                        </option>
                                                    )
                                                )
                                                : ""}
                                        </select>
                                    </div>
                                    <div className="mb-5">
                                        <h6 className="text-[#8692A6] text-md tracking-wider mb-3">
                                            Release Date
                                        </h6>
                                        <div className="relative text-[#8692A6] text-sm tracking-wider mb-3">
                                            <input
                                                type="date"
                                                ref={dateRef}
                                                onChange={(e) => setrelease_date(e.target.value)}
                                                value={
                                                    release_date == ""
                                                        ? ""
                                                        : moment
                                                            .utc(release_date)
                                                            .utc()
                                                            .format("yyyy-MM-DD")
                                                }
                                                className={
                                                    (release_date == ""
                                                        ? "text-[#8692A6]"
                                                        : "text-black") +
                                                    " h-10 w-full pl-3 border rounded appearance-none"
                                                }
                                            />
                                            <i
                                                onClick={() => {
                                                    dateRef.current.showPicker();
                                                }}
                                                id="date"
                                                className="fa fa-calendar absolute right-1 top-[10px] bg-white w-6 h-5 text-[#8692A6]"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="mb-5">
                                        <h6 className="text-[#8692A6] text-md tracking-wider mb-3">
                                            Category
                                        </h6>
                                        <Select
                                            isMulti
                                            name="category"
                                            options={optionsgenre}
                                            onChange={setmovie_id_genre}
                                            value={movie_id_genre}
                                            className="basic-multi-select h-12"
                                            classNamePrefix="select"
                                            isOptionDisabled={(optionsgenre) => optionsgenre.disabled}
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <h6 className="text-[#8692A6] text-md tracking-wider mb-3">
                                            Casts
                                        </h6>
                                        <Select
                                            isMulti
                                            name="category"
                                            options={optionscast}
                                            onChange={setmovie_id_cast}
                                            value={movie_id_cast}
                                            className="basic-multi-select h-12"
                                            classNamePrefix="select"
                                            isOptionDisabled={(optionscast) => optionscast.disabled}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="mb-5">
                                            <h6 className="text-[#8692A6] text-md tracking-wider mb-3">
                                                Duration Hour
                                            </h6>
                                            <p className="text-[#121212] text-sm tracking-wider mb-3">
                                                <input
                                                    type="text"
                                                    value={duration_hour}
                                                    onChange={(e) => setduration_hour(e.target.value)}
                                                    className="h-10 w-full border rounded pl-3"
                                                    placeholder="2"
                                                />
                                            </p>
                                        </div>
                                        <div className="mb-5">
                                            <h6 className="text-[#8692A6] text-md tracking-wider mb-3">
                                                Duration Minute
                                            </h6>
                                            <p className="text-[#121212] text-sm tracking-wider mb-3">
                                                <input
                                                    type="text"
                                                    value={duration_minute}
                                                    onChange={(e) => setduration_minute(e.target.value)}
                                                    className="h-10 w-full border rounded pl-3"
                                                    placeholder="30"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h5 className="text-[#8692A6] text-md tracking-wider mb-3">
                                Synopsis
                            </h5>
                            <p className="py-2 text-sm tracking-wider text-[#4E4B66]">
                                <textarea
                                    type="textarea"
                                    onChange={(e) => setsynopsis(e.target.value)}
                                    value={synopsis}
                                    className="h-40 w-full border rounded p-2"
                                    placeholder="Synopsis ..."
                                ></textarea>
                            </p>
                        </div>
                        <div className="">
                            <h5 className="text-[#8692A6] text-md tracking-wider mb-1">
                                Price
                            </h5>
                            <p className="py-2 text-sm tracking-wider text-[#4E4B66]">
                                <input
                                    type="text"
                                    onChange={(e) => setprice(e.target.value)}
                                    value={price}
                                    className="h-10 w-full border rounded pl-3 placholder:text-[#121212]"
                                    placeholder="35000"
                                />
                            </p>
                        </div>
                        <hr className="my-5" />
                        <div className="">
                            <h5 className="text-[#8692A6] text-md tracking-wider mb-1">
                                Add Location
                            </h5>
                            <p className="py-2 text-sm tracking-wider text-[#4E4B66]">
                                <input
                                    type="text"
                                    onChange={(e) => setlocations(e.target.value)}
                                    value={locations}
                                    className="h-10 w-full border rounded pl-3 placholder:text-[#121212]"
                                    placeholder="Surabaya,Sidoarjo,..."
                                />
                            </p>
                        </div>
                        <div className="">
                            <h5 className="text-[#8692A6] text-md tracking-wider mb-1">
                                Premier
                            </h5>
                            <p className="py-2 text-sm tracking-wider text-[#4E4B66]">
                                <Select
                                    isMulti
                                    name="category"
                                    options={optionspremier}
                                    onChange={setset_premiers}
                                    value={set_premiers}
                                    className="basic-multi-select h-12"
                                    classNamePrefix="select"
                                    isOptionDisabled={(optionspremier) => optionspremier.disabled}
                                />
                            </p>
                        </div>
                        <div className="">
                            <h5 className="text-[#8692A6] text-md tracking-wider mb-1">
                                Set Date&Time
                            </h5>
                            <p className="py-2 text-sm tracking-wider text-[#4E4B66]">
                                <input
                                    type="date"
                                    ref={setdate}
                                    onChange={(e) => setset_date(e.target.value)}
                                    value={
                                        set_date == ""
                                            ? ""
                                            : moment
                                                .utc(set_date)
                                                .utc()
                                                .format("yyyy-MM-DD")
                                    }
                                    className={
                                        (set_date == ""
                                            ? "text-[#8692A6]"
                                            : "text-black") +
                                        " h-10 w-full pl-3 border rounded appearance-none"
                                    }
                                />
                                <i
                                    onClick={() => {
                                        setdate.current.showPicker();
                                    }}
                                    id="setdate"
                                    className="fa fa-calendar absolute right-1 top-[10px] bg-white w-6 h-5 text-[#8692A6]"
                                    aria-hidden="true"
                                />
                            </p>
                            <p className="py-2 flex flex-wrap gap-5 items-center text-sm tracking-wider text-[#4E4B66]">
                                <div className="h-12 flex items-center">
                                    <input type="time" className={
                                        (time == ""
                                            ? "text-[#8692A6]"
                                            : "text-black") +
                                        " h-10 w-[80px] pl-3 mr-2 border rounded appearance-none"
                                    } id="appt" name="appt" onChange={(e) => settime(e.target.value)} />
                                    <button onClick={addtotimes} className="h-10 w-10 rounded border border-[#5F2EEA] text-[#5F2EEA] text-sm font-semibold leading-none hover:bg-[#5F2EEA] active:bg-[#2A00A2] hover:text-white">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </button>
                                </div>
                                {
                                    times ?
                                        times.map((v) => {
                                            return (
                                                <div className="h-12 flex items-center">
                                                    <button onClick={() => setdeltime(v)}>
                                                        <h1 className="hover:text-primary hover:font-bold">{v}WIB</h1>
                                                    </button>
                                                </div>
                                            )
                                        })
                                        : ""
                                }
                            </p>
                        </div>
                        <div className=" flex justify-end">
                            <button onClick={reset_form} className="mt-3 h-10 w-40 rounded border border-[#5F2EEA] text-[#5F2EEA] text-sm font-semibold leading-none hover:bg-[#5F2EEA] active:bg-[#2A00A2] hover:text-white mr-5">
                                Reset
                            </button>
                            <button
                                onClick={insert_data}
                                className="mt-3 h-10 w-40 rounded text-white bg-[#5F2EEA] text-sm font-semibold leading-none hover:bg-[#2A00A2] active:bg-[#2A00A2]"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Manage_Movie