const useDate = () => {

  // const todayDate = useState<string>("todayDate", () => "")

  const calcTodayDate = () => {
    const today = new Date();
    const formattedToday = today.toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      weekday: "long",
      day: "numeric",
    })
    return formattedToday;
  }

  return { calcTodayDate };
}

export default useDate;
