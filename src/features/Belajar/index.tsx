import MulaiBelajar from './MulaiBelajar';
import MateriSaya from './Materi/MateriSaya';
import MateriSemua from './Materi/MateriSemua';

const BelajarPage = () => {
  return (
    <div className="bg-[url('/assets/bg-belajar.png')]">
      <MulaiBelajar />
      <MateriSaya />
      <MateriSemua />
    </div>
  );
};

export default BelajarPage;
