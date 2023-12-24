import { useForm } from "react-hook-form";
import useAxios from "../../../Hooks/useAxios";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { FaTrashCan } from "react-icons/fa6";

const DashboardMain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axios = useAxios();
  const { user } = useAuth();

  const { data: allTask = [], refetch } = useQuery({
    queryKey: ["alltask", user],
    queryFn: () =>
      axios.get(`/alltask?email=${user?.email}`).then((res) => res.data),
  });

  const onSubmit = (data) => {
    const task = {
      title: data.title,
      dedline: data.dedline,
      priority: data.priority,
      descriptions: data.descriptions,
      status: "to-do",
      email: user?.email,
    };
    console.log(task);
    axios.post("/alltask", task).then(() => {
      refetch();
      toast("Add Task Sucessfully", {
        icon: "👏",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    });
  };

  const to_do = allTask.filter((task) => task.status === 'to-do')
  const ongoing = allTask.filter((task) => task.status === 'ongoing')
  const completed = allTask.filter((task) => task.status === 'completed')


  const dragStarted = (e, id) => {
    console.log("drag has been started");
    e.dataTransfer.setData("todoId", id);
  };

  const dragingOver = (e) => {
    e.preventDefault()
    console.log('draging over now');
  }

  const dragDroppedTodo = (e, status) => {
    console.log('you are drop now');
    let tanasperTaskId = e.dataTransfer.getData('todoid')
    console.log(tanasperTaskId, status);
    axios.put(`/alltask/${tanasperTaskId}`, { status: status })
      .then(res => {
        console.log(res.data);
        refetch()
      })
  }

  const dragDroppedOngoing = (e, status) => {
    console.log('you are drop now');
    let tanasperTaskId = e.dataTransfer.getData('todoid')
    console.log(tanasperTaskId, status);
    axios.put(`/alltask/${tanasperTaskId}`, { status: status })
      .then(res => {
        console.log(res.data);
        refetch()
      })
  }
  const dragDroppedCompleted = (e, status) => {
    console.log('you are drop now');
    let tanasperTaskId = e.dataTransfer.getData('todoid')
    console.log(tanasperTaskId, status);
    axios.put(`/alltask/${tanasperTaskId}`, { status: status })
      .then(res => {
        console.log(res.data);
        refetch()
      })
  }

  const handleDelete = id => {
    axios.delete(`/alltask/${id}`)
      .then(() => {
        refetch();
        toast("Task Deleted Sucessfully", {
          icon: "👏",
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      })
  }



  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-3 ">
          <div className="w-full">
            <label htmlFor="title" className="font-medium text-white">
              Title
            </label>
            <br />
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Title"
              className="border-2 rounded-md border-black px-2 py-1 w-full"
            />
            {errors.title && <span>This field is required</span>}
          </div>
          <div className="w-full">
            <label htmlFor="dedline" className="font-medium text-white">
              Deadline
            </label>
            <br />
            <input
              {...register("dedline", { required: true })}
              type="date"
              className="border-2 rounded-md border-black px-2 py-1 w-full"
            />
            {errors.dedline && <span>This field is required</span>}
          </div>
          <div className="w-full">
            <label htmlFor="priority" className="font-medium text-white">
              Priority
            </label>
            <br />
            <select
              {...register("priority", { required: true })}
              name="priority"
              id=""
              className="border-2 rounded-md border-black text-black px-2 py-1 w-full"

            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">high</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="descriptions" className="font-medium text-white">
            Descriptions
          </label>
          <br />
          <textarea
            {...register("descriptions", { required: true })}
            className="border-2 rounded-md border-black px-2 py-1 w-full"
            name="descriptions"
            id=""
            rows="2"
          ></textarea>
          {errors.descriptions && <span>This field is required</span>}
        </div>
        <input
          type="submit"
          value="Add Task"
          className="bg-[#141414] hover:bg-[#181818] px-7 py-2.5 text-white font-normal rounded-md cursor-pointer"
        />
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        <div onDragOver={(e) => dragingOver(e)} onDrop={(e) => dragDroppedTodo(e, 'to-do')} className="bg-[#181818] p-3 rounded-md">
          <h1 className="text-2xl text-white font-semibold mb-2">TO-DO</h1>
          {to_do?.map((task) => (
            <div key={task?._id}
              draggable
              onDragStart={(e) => dragStarted(e, task._id)}
              className="bg-[#FCEEDF] mb-2 rounded-md p-2"
            >
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-xl font-medium">{task?.title}</h1>
                <button onClick={() => handleDelete(task?._id)} className="text-xl text-red-700"><FaTrashCan /></button>
              </div>
              <p className="text-sm leading-4 mb-2">{task?.descriptions}</p>
              <span
                className={`font-medium px-5 text-white ${task?.priority === "low"
                    ? "bg-blue-700"
                    : task?.priority === "moderate"
                      ? "bg-yellow-500"
                      : task?.priority === "high"
                        ? "bg-red-500"
                        : ""
                  } rounded-2xl`}
              >
                {task?.priority}
              </span>
            </div>
          ))}
        </div>
        <div onDragOver={(e) => dragingOver(e)} onDrop={(e) => dragDroppedOngoing(e, 'ongoing')} className="bg-[#181818] p-3 rounded-md">
          <h1 className="text-2xl text-white font-semibold uppercase">ongoing</h1>
          {ongoing?.map((task) => (
            <div key={task?._id}
              draggable
              onDragStart={(e) => dragStarted(e, task._id)}
              className="bg-[#FCEEDF] mb-2 rounded-md p-2"
            >
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-xl font-medium">{task?.title}</h1>
                <button onClick={() => handleDelete(task?._id)} className="text-xl text-red-700"><FaTrashCan /></button>
              </div>
              <p className="text-sm leading-4 mb-2">{task?.descriptions}</p>
              <span
                className={`font-medium px-5 text-white ${task?.priority === "low"
                    ? "bg-blue-700"
                    : task?.priority === "moderate"
                      ? "bg-yellow-500"
                      : task?.priority === "high"
                        ? "bg-red-500"
                        : ""
                  } rounded-2xl`}
              >
                {task?.priority}
              </span>
            </div>
          ))}
        </div>
        <div onDragOver={(e) => dragingOver(e)} onDrop={(e) => dragDroppedCompleted(e, 'completed')} className="bg-[#181818] p-3 rounded-md">
          <h1 className="text-2xl font-semibold text-white uppercase">Completed</h1>
          {completed?.map((task) => (
            <div key={task?._id}
              draggable
              onDragStart={(e) => dragStarted(e, task._id)}
              className="bg-[#FCEEDF] mb-2 rounded-md p-2"
            >
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-xl font-medium">{task?.title}</h1>
                <button onClick={() => handleDelete(task?._id)} className="text-xl text-red-700"><FaTrashCan /></button>
              </div>
              <p className="text-sm leading-4 mb-2">{task?.descriptions}</p>
              <span
                className={`font-medium px-5 text-white ${task?.priority === "low"
                    ? "bg-blue-700"
                    : task?.priority === "moderate"
                      ? "bg-yellow-500"
                      : task?.priority === "high"
                        ? "bg-red-500"
                        : ""
                  } rounded-2xl`}
              >
                {task?.priority}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardMain;